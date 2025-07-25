"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';

const AISanitizer = () => {
    const [inputSchema, setInputSchema] = useState('');
    const [outputData, setOutputData] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState('');

    // Common data patterns for anonymization
    const anonymizationPatterns = {
        email: () => `user_${Math.random().toString(36).substring(2, 8)}@example.com`,
        phone: () => `+44 ${Math.floor(Math.random() * 900) + 100} ${Math.floor(Math.random() * 9000) + 1000} ${Math.floor(Math.random() * 9000) + 1000}`,
        name: () => {
            const firstNames = ['Alex', 'Jordan', 'Sam', 'Taylor', 'Casey', 'Morgan', 'Riley', 'Quinn'];
            const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller'];
            return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
        },
        address: () => {
            const streets = ['High Street', 'Church Road', 'Station Avenue', 'Park Lane', 'Queen Street'];
            const cities = ['London', 'Manchester', 'Birmingham', 'Leeds', 'Liverpool'];
            return `${Math.floor(Math.random() * 999) + 1} ${streets[Math.floor(Math.random() * streets.length)]}, ${cities[Math.floor(Math.random() * cities.length)]}`;
        },
        postcode: () => {
            const areas = ['SW1A', 'M1', 'B1', 'LS1', 'L1'];
            return `${areas[Math.floor(Math.random() * areas.length)]} ${Math.floor(Math.random() * 9) + 1}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`;
        },
        date: () => {
            const start = new Date(2020, 0, 1);
            const end = new Date();
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
        },
        uuid: () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0;
            const v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }),
        id: () => Math.floor(Math.random() * 1000000) + 1,
        age: () => Math.floor(Math.random() * 50) + 18,
        salary: () => Math.floor(Math.random() * 50000) + 25000,
        company: () => {
            const companies = ['TechCorp', 'InnovateLtd', 'DigitalSolutions', 'FutureSystems', 'SmartTech'];
            return companies[Math.floor(Math.random() * companies.length)];
        }
    };

    const detectFieldType = (fieldName, value) => {
        const lowerField = fieldName.toLowerCase();
        const lowerValue = String(value).toLowerCase();

        // Email detection
        if (lowerField.includes('email') || lowerValue.includes('@')) {
            return 'email';
        }

        // Phone detection
        if (lowerField.includes('phone') || lowerField.includes('mobile') || lowerField.includes('tel')) {
            return 'phone';
        }

        // Name detection
        if (lowerField.includes('name') || lowerField.includes('first') || lowerField.includes('last')) {
            return 'name';
        }

        // Address detection
        if (lowerField.includes('address') || lowerField.includes('street')) {
            return 'address';
        }

        // Postcode detection
        if (lowerField.includes('postcode') || lowerField.includes('zip')) {
            return 'postcode';
        }

        // Date detection
        if (lowerField.includes('date') || lowerField.includes('dob') || lowerField.includes('birth')) {
            return 'date';
        }

        // UUID detection
        if (lowerField.includes('uuid') || lowerField.includes('guid')) {
            return 'uuid';
        }

        // ID detection
        if (lowerField.includes('id')) {
            return 'id';
        }

        // Age detection
        if (lowerField.includes('age')) {
            return 'age';
        }

        // Salary detection
        if (lowerField.includes('salary') || lowerField.includes('income')) {
            return 'salary';
        }

        // Company detection
        if (lowerField.includes('company') || lowerField.includes('organisation')) {
            return 'company';
        }

        return 'text';
    };

    const anonymizeValue = (value, fieldName) => {
        if (value === null || value === undefined) {
            return value;
        }

        const fieldType = detectFieldType(fieldName, value);
        const pattern = anonymizationPatterns[fieldType];

        if (pattern) {
            return pattern();
        }

        // For unknown types, return a generic anonymized value
        return `Sample_${fieldName}`;
    };

    // NEW: Generate anonymized data directly from schema
    const generateAnonymizedData = (schema, parentKey = '') => {
        if (Array.isArray(schema)) {
            return [generateAnonymizedData(schema[0], parentKey)];
        }

        if (typeof schema === 'object' && schema !== null) {
            const anonymized = {};
            for (const [key, value] of Object.entries(schema)) {
                const fieldName = parentKey ? `${parentKey}_${key}` : key;
                anonymized[key] = generateAnonymizedData(value, fieldName);
            }
            return anonymized;
        }

        // For primitive types, generate anonymized values based on field name
        if (typeof schema === 'string') {
            return anonymizeValue('sample', parentKey);
        }
        if (typeof schema === 'number') {
            return anonymizeValue(42, parentKey);
        }
        if (typeof schema === 'boolean') {
            return true;
        }

        return null;
    };

    const processSchema = () => {
        setIsProcessing(true);
        setError('');

        try {
            // Parse the input schema
            const schema = JSON.parse(inputSchema);

            // Generate anonymized data directly from schema
            const anonymizedData = generateAnonymizedData(schema);

            setOutputData(JSON.stringify(anonymizedData, null, 2));
        } catch (err) {
            setError('Invalid JSON schema. Please check your input format.');
        } finally {
            setIsProcessing(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(outputData);
    };

    const clearAll = () => {
        setInputSchema('');
        setOutputData('');
        setError('');
    };

    const exampleSchema = {
        "user": {
            "id": "number",
            "firstName": "string",
            "lastName": "string",
            "email": "string",
            "phoneNumber": "string",
            "dateOfBirth": "string",
            "address": {
                "street": "string",
                "city": "string",
                "postcode": "string",
                "country": "string"
            },
            "company": "string",
            "salary": "number",
            "isActive": "boolean"
        },
        "orders": [
            {
                "orderId": "string",
                "productName": "string",
                "quantity": "number",
                "price": "number",
                "orderDate": "string"
            }
        ]
    };

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900">
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-24 lg:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                            AI Data Sanitizer
                        </h1>
                        <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Generate GDPR-compliant, anonymized test data from JSON schemas for safe ChatGPT API testing.
                            Protect sensitive information while maintaining data structure for development and testing.
                        </p>
                    </div>
                </section>

                {/* Tool Interface */}
                <section className="container mx-auto px-4 py-16">
                    <div className="max-w-8xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Input Section */}
                            <motion.div
                                className="card p-6"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-2xl font-bold text-white mb-6">Input JSON Schema</h2>

                                <div className="mb-4">
                                    <label className="block text-white/80 mb-2">Schema Structure</label>
                                    <textarea
                                        value={inputSchema}
                                        onChange={(e) => setInputSchema(e.target.value)}
                                        placeholder="Paste your JSON schema here..."
                                        className="w-full h-64 p-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:border-violet-500 focus:outline-none resize-none"
                                    />
                                </div>

                                <div className="flex flex-wrap gap-3 mb-4">
                                    <button
                                        onClick={() => setInputSchema(JSON.stringify(exampleSchema, null, 2))}
                                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                    >
                                        Load Example
                                    </button>
                                    <button
                                        onClick={clearAll}
                                        className="px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors"
                                    >
                                        Clear All
                                    </button>
                                </div>

                                <button
                                    onClick={processSchema}
                                    disabled={isProcessing || !inputSchema.trim()}
                                    className="w-full px-6 py-3 bg-violet-600 hover:bg-violet-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
                                >
                                    {isProcessing ? 'Processing...' : 'Generate Anonymized Data'}
                                </button>

                                {error && (
                                    <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300">
                                        {error}
                                    </div>
                                )}
                            </motion.div>

                            {/* Output Section */}
                            <motion.div
                                className="card p-6"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-bold text-white">Anonymized Output</h2>
                                    {outputData && (
                                        <button
                                            onClick={copyToClipboard}
                                            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                            Copy
                                        </button>
                                    )}
                                </div>

                                <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 h-64 overflow-auto">
                                    {outputData ? (
                                        <pre className="text-green-300 text-sm whitespace-pre-wrap">{outputData}</pre>
                                    ) : (
                                        <p className="text-slate-400 text-sm">
                                            Anonymized data will appear here after processing...
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        </div>

                        {/* Features Section */}
                        <motion.div
                            className="py-16"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-8 text-center">Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="card p-6 text-center">
                                    <div className="text-3xl mb-4">🔒</div>
                                    <h3 className="text-xl font-bold text-white mb-3">GDPR Compliant</h3>
                                    <p className="text-white/70">
                                        Automatically anonymizes personal data while maintaining structure for testing.
                                    </p>
                                </div>
                                <div className="card p-6 text-center">
                                    <div className="text-3xl mb-4">🤖</div>
                                    <h3 className="text-xl font-bold text-white mb-3">AI-Ready</h3>
                                    <p className="text-white/70">
                                        Generates realistic test data perfect for ChatGPT API development and testing.
                                    </p>
                                </div>
                                <div className="card p-6 text-center">
                                    <div className="text-3xl mb-4">⚡</div>
                                    <h3 className="text-xl font-bold text-white mb-3">Instant Processing</h3>
                                    <p className="text-white/70">
                                        Real-time anonymization with intelligent field detection and pattern matching.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default AISanitizer;
