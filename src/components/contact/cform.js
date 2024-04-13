import React, { useState } from 'react';
import 'firebase/firestore';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import app from '../../firebase';

export default function Cform() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const db=getFirestore(app)
    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const customDocId = Math.floor(new Date().getTime()).toString();
            await setDoc(doc(db, "Messages", "Id-"+customDocId), {
                id:"Id-"+customDocId,
                name: name,
                email: email,
                subject: subject,
                message: message,
                timestamp: new Date()
            });

            // Clear the form
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('Error sending message. Please try again.');
        }
    }

    return (
        <div className="w-full md:w-1/2 order-2 md:order-1 px-4">
            <form onSubmit={handleSubmit} action="#" className="bg-light p-4 md:p-5 border rounded contact-form">
                <div className="mb-4">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-slate-300 p-3 border rounded" placeholder="Your Name" required />
                </div>
                <div className="mb-4">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-slate-300 p-3 border rounded" placeholder="Your Email" required />
                </div>
                <div className="mb-4">
                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full bg-slate-300 p-3 border rounded" placeholder="Subject" required />
                </div>
                <div className="mb-4">
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} cols="30" rows="7" className="w-full bg-slate-300 p-3 border rounded" placeholder="Message" required></textarea>
                </div>
                <div className="mb-4 items-center justify-center flex">
                    <button type="submit" className="py-3 px-5 bg-orange-500 hover:bg-orange-600 rounded-full text-lg font-bold text-neutral-300">Send</button>
                </div>
            </form>
        </div>
    )
}
