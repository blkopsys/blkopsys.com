import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100 font-mono flex items-center justify-center p-8">
      <div className="max-w-xl w-full space-y-8 text-center">
        {/* ACCESS HEADER */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-widest uppercase text-red-500 whitespace-nowrap">
          [ / ACCESS RESTRICTED / ]
        </h1>

        {/* CORE PROTOCOL TEXT */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed text-left space-y-2">
          <strong className="text-gray-400 uppercase text-sm tracking-widest">
            BLKOPSYS // CONTROLLED GATEWAY INTERFACE
          </strong><br />
          Division: BLACK HORIZON USA — Protocol Enforcement<br /><br />

          <span className="uppercase text-gray-300 text-sm">Synthetic Intelligence Status:</span><br />
          &nbsp;&nbsp;Active<br />
          &nbsp;&nbsp;Networked<br />
          &nbsp;&nbsp;Adversarial<br /><br />

          <span className="uppercase text-gray-300 text-sm">Protocol Authority:</span><br />
          &nbsp;&nbsp;Prompt Interception → <span className="text-green-400">ACTIVE</span><br />
          &nbsp;&nbsp;Execution Containment → <span className="text-green-400">ACTIVE</span><br />
          &nbsp;&nbsp;Embedded Logic Tracing → <span className="text-green-400">ACTIVE</span><br /><br />

          VXON / TRACE modules via encrypted deployment<br /><br />
          ECHOCORE and PENUMBRA systems are CLASSIFIED<br />
          Unauthorized access is prohibited by protocol
        </p>

        {/* ACCESS FORM */}
        <form
          action="https://formsubmit.co/YOUR_EMAIL_HERE"
          method="POST"
          className="space-y-4 text-left"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Access Request - BLKOPSYS" />

          <input
            type="text"
            name="name"
            required
            placeholder="NAME / IDENT CODE"
            className="w-full bg-gray-800 border border-gray-700 px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="EMAIL / OPS NODE"
            className="w-full bg-gray-800 border border-gray-700 px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />

          <textarea
            name="message"
            required
            rows={4}
            placeholder="AUTHORIZATION REQUEST"
            className="w-full bg-gray-800 border border-gray-700 px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white uppercase tracking-wider py-2 px-4 text-sm"
          >
            [ INITIATE REQUEST CHANNEL ]
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-sm text-gray-400 text-center pt-9">
          BLKOPSYS is a black-layer AI enforcement protocol. All access is restricted. All requests are logged.
        </p>
      </div>
    </div>
  );
}
