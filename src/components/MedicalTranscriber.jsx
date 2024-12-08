import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, FileText, Brain, AlertCircle, CheckCircle2 } from 'lucide-react';

const MedicalTranscriber = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [transcript, setTranscript] = useState([]);
    const [summary, setSummary] = useState(null);
    const conversationInterval = useRef(null);
    
    // Mock conversation data
    const mockConversation = [
        { speaker: 'Doctor', text: "Hello, how are you feeling today?" },
        { speaker: 'Patient', text: "Not great, I've been having these terrible migraines." },
        { speaker: 'Doctor', text: "I'm sorry to hear that. When did they start?" },
        { speaker: 'Patient', text: "About two weeks ago. They're worst in the mornings." },
        { speaker: 'Doctor', text: "Are you experiencing any other symptoms?" },
        { speaker: 'Patient', text: "Yes, sometimes I feel nauseous and sensitive to light." },
        { speaker: 'Doctor', text: "How would you rate the pain on a scale of 1-10?" },
        { speaker: 'Patient', text: "Usually around 7, but sometimes it gets up to 9." },
        { speaker: 'Doctor', text: "Are you taking any medication for it?" },
        { speaker: 'Patient', text: "Just over-the-counter painkillers, but they don't help much." }
    ];

    // Generate mock summary
    const generateSummary = () => ({
        patientComplaints: "Severe migraines, ongoing for two weeks, predominantly in mornings",
        symptoms: [
            "Primary: Migraine headaches",
            "Secondary: Nausea, photosensitivity"
        ],
        severity: "Severe (7-9/10 pain scale)",
        currentTreatment: "OTC painkillers (ineffective)",
        recommendations: [
            "Prescription migraine medication",
            "Keep headache diary",
            "Follow-up in 2 weeks",
            "Lifestyle modifications"
        ]
    });

    useEffect(() => {
        if (isRecording) {
            let index = 0;
            conversationInterval.current = setInterval(() => {
                if (index < mockConversation.length) {
                    setTranscript(prev => [...prev, mockConversation[index]]);
                    index++;
                } else {
                    clearInterval(conversationInterval.current);
                }
            }, 2000);
        } else {
            clearInterval(conversationInterval.current);
            if (transcript.length > 0) {
                setSummary(generateSummary());
            }
        }

        return () => clearInterval(conversationInterval.current);
    }, [isRecording]);

    const handleToggleRecording = () => {
        if (!isRecording) {
            setTranscript([]);
            setSummary(null);
        }
        setIsRecording(!isRecording);
    };
