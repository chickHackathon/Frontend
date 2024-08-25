import React, { useState, useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import ImageUploader from 'quill-image-uploader';
import 'quill-image-uploader/dist/quill.imageUploader.min.css';
import { SavedMemoContainer } from "../styled/MemoStyles";

Quill.register('modules/imageUploader', ImageUploader);

const MemoPage: React.FC = () => {
    const [memoContent, setMemoContent] = useState<string>('');
    const quillRef = useRef<HTMLDivElement | null>(null);
    const quillInstanceRef = useRef<Quill | null>(null);

    useEffect(() => {
        if (quillRef.current && !quillInstanceRef.current) {
            quillInstanceRef.current = new Quill(quillRef.current, {
                theme: 'snow',
                modules: {
                    toolbar: [
                        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                        ['bold', 'italic', 'underline'],
                        ['image']
                    ],
                    imageUploader: {
                        upload: (file: File) => {
                            return new Promise((resolve, reject) => {
                                const reader = new FileReader();
                                reader.onload = () => {
                                    resolve(reader.result as string);
                                };
                                reader.onerror = reject;
                                reader.readAsDataURL(file);
                            });
                        }
                    }
                }
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
            <SavedMemoContainer dangerouslySetInnerHTML={{ __html: memoContent }}></SavedMemoContainer>
        </div>
    );
};

export default MemoPage;