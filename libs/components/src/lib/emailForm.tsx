import { useState, ChangeEvent, FormEvent } from 'react';

export const EmailForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [emailContent, setEmailContent] = useState('');

  const handleClick = () => {
    setShowForm(true);
  };

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEmailContent(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform email sending logic here
    console.log('Email content:', emailContent);
    setEmailContent('');
    setShowForm(false);
  };

  return (
    <div>
      {!showForm ? (
        <button
          className="rounded border-2 border-cyan-900 text-opacity-90 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-cyan-900 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-teal-500 hover:bg-opacity-10 hover:text-green-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          onClick={handleClick}
        >
          Compose Email
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full border p-2"
            value={emailContent}
            onChange={handleInputChange}
            rows={8}
            placeholder="Write your email..."
          ></textarea>
          <button
            className="rounded border-2 bg-cyan-900 bg-opacity-90 border-cyan-900 text-stone-300 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-cyan-900 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-teal-500 hover:bg-opacity-10 hover:text-green-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 "
            type="submit"
          >
            Send Email
          </button>
        </form>
      )}
    </div>
  );
};

export default EmailForm;

