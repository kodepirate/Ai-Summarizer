import {logo} from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-7 pt-2">
            <img src={logo} alt="summarizer_logo" className='w-40 object-contain' />

            <button type="button"
            onClick={() => window.open('https://github.com/kodepirate/Ai-Summarizer')}
            className = "black_btn"
            >
                <span className="text-white">View on Github</span>
            </button>
        </nav>

        <h1 className="head_text">
        Summarizer <br className='max-md:hidden' /> 
        <span className="orange_gradient">OPEN-AI  </span>
        </h1>
        <h2 className="desc">
        Summarizer is a web app that uses Open-AI GPT-3 to summarize  any text.

        </h2>
    </header>
    )
}

export default Hero