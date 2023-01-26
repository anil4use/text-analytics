import React from 'react'

function About(props) {
return (
<>
  <div className={`container my-4 text-${props.Mode==='dark' ? 'light' : 'dark' }`}>
    <h2>Text Editing – Online Editor
    </h2>
    <p>The manual writing process on papers has turned into the usage of word processing software over the years.
      People are involved in writing tasks across many fields, and they have to prepare and edit files using software
      like MS Word, WordPad, etc. However, the problem people face with these programs is that they don’t come for free.
      They need to be installed on your device, and the device should be compatible enough to run them smoothly.</p>
    <h2>How to Use our Online Text Editor?</h2>
    <p>The editor on our website is an easy to use tool for text editing online that doesn’t make its users go
      through or follow any intricate procedures for editing their text files. You don’t need to learn the editing
      features provided on this tool as they are similar to the ones you might already have used on the text editing
      programs like MS Word. The simple steps you have to follow for using this text editor online are discussed below.
    </p>
   
    <h2>Fast and Error-Free Editing:
    </h2>
    <p> The tool is a super-fast service that allows you to edit any file in a matter of a few minutes. It provides the
      users with an error-free editing facility, as they can download the perfectly edited file on their device with a
      single click.</p>
    <p>Our developers have worked hard to present you with this efficacious text writer utility to make the editing
      process a piece of cake for everyone. This tool is based on advanced algorithms that help you edit your documents
      without facing any glitches. The users aren’t asked to get registered for using this online text editor. You don’t
      have to sign up and log in. There is no need to scratch your head and find a specific device for using this online
      utility as it works competently on all operating systems, including iOS, Android, Mac, Windows, and Linux. You can
      get access to this online service without paying a penny. The tool or website doesn’t ask its users to get a
      premium membership for using this editpad online.</p>
  </div>

</>
)
}

export default About