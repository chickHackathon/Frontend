import React, { useState, useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const MemoPage: React.FC = () => {
    const [memoContent, setMemoContent] = useState<string>('');
    const quillRef = useRef<HTMLDivElement | null>(null);
    const quillInstanceRef = useRef<Quill | null>(null);

    useEffect(() => {
        if (quillRef.current && !quillInstanceRef.current) {
            quillInstanceRef.current = new Quill(quillRef.current, {
                theme: 'snow',
            });

            quillInstanceRef.current.on('text-change', () => {
                setMemoContent(quillInstanceRef.current?.root.innerHTML || '');
            });
        }
    }, []);

    const handleSaveMemo = () => {
        console.log('Memo saved:', memoContent);
    };

    return (
        <div>
            <h1>Memo Page</h1>
            <div ref={quillRef} style={{ height: '200px' }}></div>
            <button onClick={handleSaveMemo}>Save Memo</button>
            <h2>Saved Memo</h2>
            <div dangerouslySetInnerHTML={{ __html: memoContent }}></div>
        </div>
    );
};

export default MemoPage;