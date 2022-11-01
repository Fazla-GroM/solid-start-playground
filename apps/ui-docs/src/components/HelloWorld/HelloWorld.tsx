import { createSignal } from 'solid-js'
import { A } from 'solid-start'

import { counterStyle, headerStyle, logoImgStyle, logoStyle, mainStyle } from './hello-world.css'

const HelloWorld = () => {
    const [count, setCount] = createSignal(0)
    return (
        <>
            <header class={headerStyle}>
                <A class={logoStyle} href="/">
                    <img class={logoImgStyle} src="solid-logo.svg" alt="Solid Logo" />
                    <img class={logoImgStyle} src="ve-logo.svg" alt="Solid Logo" />
                    <img class={logoImgStyle} src="turbo-logo.svg" alt="Turbo Logo" />
                    <span>Solid VE Turbo Starter</span>
                </A>
            </header>
            <main class={mainStyle}>
                <h1>Hello world!</h1>
                <button class={counterStyle} onClick={() => setCount(count() + 1)}>
                    Clicks: {count()}
                </button>
                <ul>
                    <li>
                        Visit{' '}
                        <a href="https://start.solidjs.com" target="_blank">
                            start.solidjs.com
                        </a>{' '}
                        to learn how to build SolidStart apps.
                    </li>
                    <li>
                        Visit{' '}
                        <a href="https://vanilla-extract.style" target="_blank">
                            vanilla-extract.style
                        </a>{' '}
                        to learn how to write 0 runtime css with full power of typescript.
                    </li>
                    <li>
                        Visit{' '}
                        <a href="https://turbo.build/repo" target="_blank">
                            Turborepo
                        </a>{' '}
                        to learn how to setup monorepo.
                    </li>
                </ul>
            </main>
            <footer />
        </>
    )
}

export { HelloWorld }
