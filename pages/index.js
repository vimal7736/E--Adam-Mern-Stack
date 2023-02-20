import Head from 'next/head';

import Format from '../layout/format';

// compoenents

import Register from '../components/Register';

export default function Home() {
  return (
    <Format>
      {/* we can import sections from ./component/sectiions/section1 here or anywhere in pages for differernt sections */}
      <Register></Register>
    </Format>
  );
}
