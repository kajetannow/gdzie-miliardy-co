import * as React from "react"

const svg = <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="
M 0, 100
C 0, 25 25, 0 100, 0
S 200, 25 200, 100
    175, 200 100, 200
    0, 175 0, 100
" fill="#71CC35" transform="rotate(
0,
100,
100
) translate(
0
0
)"></path></svg>

const bus = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#252525" d="M592 384H576C576 437 533 480 480 480C426.1 480 384 437 384 384H256C256 437 213 480 160 480C106.1 480 64 437 64 384H48C21.49 384 0 362.5 0 336V104C0 64.24 32.24 32 72 32H465.1C483.1 32 501.9 40.34 514.1 54.78L624.1 186.5C634.7 197.1 640 212.6 640 227.7V336C640 362.5 618.5 384 592 384zM64 192H160V96H72C67.58 96 64 99.58 64 104V192zM545.1 192L465.1 96H384V192H545.1zM320 192V96H224V192H320zM480 336C453.5 336 432 357.5 432 384C432 410.5 453.5 432 480 432C506.5 432 528 410.5 528 384C528 357.5 506.5 336 480 336zM160 432C186.5 432 208 410.5 208 384C208 357.5 186.5 336 160 336C133.5 336 112 357.5 112 384C112 410.5 133.5 432 160 432z"/></svg>
const instagramLogo = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#F0F0F0" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
const school = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#252525" d="M320 128C328.8 128 336 135.2 336 144V160H352C360.8 160 368 167.2 368 176C368 184.8 360.8 192 352 192H320C311.2 192 304 184.8 304 176V144C304 135.2 311.2 128 320 128zM476.8 98.06L602.4 125.1C624.4 130.9 640 150.3 640 172.8V464C640 490.5 618.5 512 592 512H48C21.49 512 0 490.5 0 464V172.8C0 150.3 15.63 130.9 37.59 125.1L163.2 98.06L302.2 5.374C312.1-1.791 327-1.791 337.8 5.374L476.8 98.06zM256 512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512zM96 192C87.16 192 80 199.2 80 208V272C80 280.8 87.16 288 96 288H128C136.8 288 144 280.8 144 272V208C144 199.2 136.8 192 128 192H96zM496 272C496 280.8 503.2 288 512 288H544C552.8 288 560 280.8 560 272V208C560 199.2 552.8 192 544 192H512C503.2 192 496 199.2 496 208V272zM96 320C87.16 320 80 327.2 80 336V400C80 408.8 87.16 416 96 416H128C136.8 416 144 408.8 144 400V336C144 327.2 136.8 320 128 320H96zM496 400C496 408.8 503.2 416 512 416H544C552.8 416 560 408.8 560 400V336C560 327.2 552.8 320 544 320H512C503.2 320 496 327.2 496 336V400zM320 88C271.4 88 232 127.4 232 176C232 224.6 271.4 264 320 264C368.6 264 408 224.6 408 176C408 127.4 368.6 88 320 88z"/></svg>
const wind = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#252525" d="M32 192h320c52.94 0 96-43.06 96-96s-43.06-96-96-96h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c17.66 0 32 14.34 32 32s-14.34 32-32 32H32C14.31 128 0 142.3 0 160S14.31 192 32 192zM160 320H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h128c17.66 0 32 14.34 32 32s-14.34 32-32 32H128c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S212.9 320 160 320zM416 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h384c17.66 0 32 14.34 32 32s-14.34 32-32 32h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S468.9 224 416 224z"/></svg>

export {svg, bus, instagramLogo, school, wind}