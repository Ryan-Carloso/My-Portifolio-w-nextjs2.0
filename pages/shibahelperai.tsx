// /pages/ShibaHelperScreen.tsx
import React from 'react';

export default function ShibaHelperScreen() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">Shiba Helper AI Assistant</h1>
            <img 
                src="https://firebasestorage.googleapis.com/v0/b/portifolio-c0281.appspot.com/o/chatbot.png?alt=media&token=2198674c-4e03-468f-8ec3-99c714975cd4" 
                alt="Shiba Helper" 
                className="w-full h-auto mb-4 rounded-lg"
            />
            <p className="mb-4">Descrição: (Chatbot AI)</p>
            <p className="mb-4">Data: 2024/07</p>
            <p className="mb-4">Tecnologias: React, Firebase Auth, GPT-API</p>
            <a href="https://github.com/yourusername/shiba-helper" target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-500 text-green-200 px-4 py-2 rounded">View on GitHub</button>
            </a>
            <div className="bg-red-500 h-64">
    Teste de fundo vermelho
</div>

            {/* Adicione mais fotos ou informações adicionais conforme necessário */}
        </div>
    );
}
