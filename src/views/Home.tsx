import { useEffect, useState } from 'react';
import { toJavanese } from 'carakanjs';
import ReactMarkdown from 'react-markdown';
import { ABOUT_TEXT, HELP_TEXT } from '../data/documentation';
import remarkGfm from 'remark-gfm';
import commentBox from 'commentbox.io/dist/commentBox.min';

const Home = () => {
  const [useSwara, setUseSwara] = useState(true);
  const [useMurda, setUseMurda] = useState(true);
  const [useAccents, setUseAccents] = useState(false);

  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const [inputPlaceholder, setInputPlaceHolder] = useState('');
  const [resultPlaceholder, setResultPlaceholder] = useState('');

  useEffect(() => {
    let output = '';
    try {
      const options = {
        useSwara,
        useMurda,
        useAccents,
      };
      output = toJavanese(text, options);

      if (!output) {
        if (text) setResultPlaceholder('Lanjutkan mengetik...');
        else setResultPlaceholder('Hasil akan muncul di sini...');
      }
    } catch (error) {
      setResultPlaceholder('');
    }
    setResult(output);
  }, [text, useSwara, useMurda, useAccents]);

  useEffect(() => {
    if (useAccents) {
      setInputPlaceHolder('Coba tulis "és dawet" atau "e`s dawet"');
    } else {
      setInputPlaceHolder('Coba tulis "es dawxt"');
    }
  }, [useAccents]);

  useEffect(() => {
    commentBox.removeCommentBox = commentBox('5647246792065024-proj');
    return () => {
      commentBox.removeCommentBox();
    };
  }, []);

  return (
    <>
      {/* Header */}
      <div className="px-4 py-6 text-2xl text-center text-white bg-green-800 font-calsans">
        Nulis Jawa&nbsp;&nbsp;<span className="font-bold text-green-500 font-javanese">ꦤꦸꦭꦶꦱ꧀ꦗꦮ</span>
      </div>
      {/* Options */}
      <div className="flex flex-col items-center justify-center gap-2 p-5 text-sm text-center text-white bg-gray-200 font-calsans sm:gap-5 md:flex-row">
        <span className="font-semibold text-gray-700">Opsi:</span>
        <label htmlFor="useAccents" className="inline-flex">
          <input
            id="useAccents"
            type="checkbox"
            className="w-5 h-5 text-green-600 rounded"
            checked={useAccents}
            onChange={() => setUseAccents(!useAccents)}
          />
          <span className="ml-1 text-gray-700">Pakai aksen (é/e`)</span>
        </label>
        <label htmlFor="useSwara" className="inline-flex">
          <input
            id="useSwara"
            type="checkbox"
            className="w-5 h-5 text-green-600 rounded"
            checked={useSwara}
            onChange={() => setUseSwara(!useSwara)}
          />
          <span className="ml-1 text-gray-700">Aksara Swara</span>
        </label>
        <label htmlFor="useMurda" className="inline-flex">
          <input
            id="useMurda"
            type="checkbox"
            className="w-5 h-5 text-green-600 rounded form-checkbox"
            checked={useMurda}
            onChange={() => setUseMurda(!useMurda)}
          />
          <span className="ml-1 text-gray-700">Aksara Murda</span>
        </label>
        <a href="#help" className="text-green-600 underline">Bingung? Cek cara penggunaan</a>
      </div>
      {/* Input */}
      <div className="w-full px-1">
        <textarea
          autoFocus={true}
          autoCorrect="off"
          placeholder={inputPlaceholder}
          className="w-full p-8 text-xl placeholder-gray-300 border-none resize-none h-52 focus:ring-4 focus:ring-green-500"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      {/* Output */}
      <div className="flex flex-col gap-4 px-8 pt-10 bg-gray-100 group pb-14">
        <span className="text-gray-500 font-calsans">Aksara Jawa:</span>
        {result && (
          <span className="text-5xl font-javanese font-bold text-gray-700 break-all leading-[5rem]">{result}</span>
        )}
        {!result && <span className="text-xl text-gray-400">{resultPlaceholder}</span>}
      </div>
      {/* Help and Comments */}
      <div id="help" className="flex flex-col w-full h-full gap-6 px-6 bg-gray-100 border-t-4 border-gray-300 py-14 md:flex-row">
        <ReactMarkdown remarkPlugins={[remarkGfm]} className="w-full px-6 prose prose-blue prose-md">
          {HELP_TEXT}
        </ReactMarkdown>
        <div className="w-full md:w-1/2">
          <ReactMarkdown remarkPlugins={[remarkGfm]} className="w-full px-6 prose prose-blue prose-md">
            {ABOUT_TEXT}
          </ReactMarkdown>
          <div className="commentbox" />
        </div>
      </div>
      {/* Footer */}
      <div className="px-4 py-6 text-center bg-gray-200 text-md font-calsans">
        &copy; {new Date().getFullYear()} <a href="https://nourman.id" className="underline" target="_blank" rel="noopener noreferrer">Nourman Hajar</a> <span className="font-bold text-green-500 font-javanese">ꦤꦸꦭꦶꦱ꧀ꦗꦮ</span>
      </div>
    </>
  );
};

export default Home;
