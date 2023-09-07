import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p className='text-base'>This is some &apos;Base&apos; text.</p>
      <p>This is some &apos;Paragraph&apos; text.</p>
      <p className='text-body'>This is some &apos;Body&apos; text.</p>
      <p className='text-small'>This is some &apos;Small&apos; text.</p>
    </main>
  );
}
