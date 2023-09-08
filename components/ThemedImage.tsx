import Image from 'next/image';
import { useTheme } from 'next-themes';

function ThemedImage(fileName: string | any) {
  const { resolvedTheme } = useTheme();
  let src;

  console.log('filename:', fileName.fileName);

  switch (resolvedTheme) {
    case 'light':
      src = `/icons/navbar-icons/light/${fileName.fileName}`;
      console.log('src=', src);
      break;
    case 'dark':
      src = `/icons/navbar-icons/dark/${fileName.fileName}`;
      break;
    default:
      src = `/icons/navbar-icons/placeholder2.png`;
      break;
  }

  return <Image src={src} width={24} height={24} alt='' />;
}

export default ThemedImage;
