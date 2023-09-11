import { copy } from '@/public/icons/navbar-icons';
import clipboardCopy from 'clipboard-copy';
import Image from 'next/image';

interface CopyEmailProps {
  email: string;
}

const CopyEmail: React.FC<CopyEmailProps> = ({ email }) => {
  const handleCopyToClipboard = () => {
    clipboardCopy(email);
  };

  return (
    <button
      onClick={handleCopyToClipboard}
      className='inline-flex h-9 items-center justify-center rounded-full bg-white500 py-3 text-xs font-semibold text-white900 dark:bg-primaryDark md:w-36 md:px-3 lg:py-5 lg:text-sm xl:w-48'
    >
      <p>Contact Me &nbsp; &nbsp;</p>
      <Image src={copy} height={24} width={24} alt='Copy and paste email' />
    </button>
  );
};

export default CopyEmail;
