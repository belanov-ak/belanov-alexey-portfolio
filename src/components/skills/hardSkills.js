import { PrimaryButton } from '../PrimaryButton'

export const HardSkills = () => (
    <div className='hard-skills__main'>
        <div className='hard-skills__element skill'>
            <h2 className='skill__header'>Html</h2>
            <h3 className='skill__text'>I can do layout of any complexity. Work with PUG and JSX</h3>
        </div>
        <div className='hard-skills__element skill'>
            <h2 className='skill__header'>Css</h2>
            <h3 className='skill__text'>Create web interfaces with Sass(Scss). Also use bootsrap</h3>
        </div>
        <div className='hard-skills__element skill'>
            <h2 className='skill__header'>JavaScrtipt</h2>
            <h3 className='skill__text'>Studying native JS, I wrote libraries similar to Reat, Redux, JQuery</h3>
        </div>
        <div className='hard-skills__element skill'>
            <h2 className='skill__header'>React</h2>
            <h3 className='skill__text'>The emphasis in development is on interactivity and performance</h3>
        </div>
        <div className='hard-skills__button'>
            <PrimaryButton text='view github' url='https://github.com/belanov-ak'/>
        </div>
    </div>
)