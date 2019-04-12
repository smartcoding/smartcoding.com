import Head from 'next/head'

if (typeof document !== 'undefined' && document) {
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/5ca0b3a41de11b6e3b06151f/default';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
}

const Index = () => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:500"
        rel="stylesheet"
        key="google-font-montserrat"
        />
    </Head>
    <p className="logo"><em>s</em>martcoding</p>
      <style jsx>{`
        @keyframes blinker {
          from { opacity: 1.0; }
          to { opacity: 0.0; }
        }
        .logo {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          padding: 0;
          margin: 0;

          font-family: 'Montserrat', 'Roboto';
          color: #37485a;
          z-index: 1;
          font-size: 58px;
        }
        .logo::after {
          content: "_";
          right: 0;
          padding-left: 6px;
          font-weight: bold;
          animation-name: blinker;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.42,0,0.58,1);
          animation-duration: .8s;
        }
        .logo em {
          font-style: normal;
          padding: 0 15px 0;
          color: #60bef0;
          position: relative;
        }
        .logo em::before {
          content: "[";
          top: 1px;
          position: absolute;
          left: -5px;
        }
        .logo em::after {
          content: "]";
          top: 1px;
          position: absolute;
        }
      `}</style>
  </div>
)

export default Index
