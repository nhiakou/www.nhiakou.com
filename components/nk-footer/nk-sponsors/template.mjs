import { ORIGIN, NHIAKOU } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/tl-footer/shadow.css">
    <link rel="stylesheet" href="${NHIAKOU}/components/nk-footer/nk-sponsors/shadow.css">
    <h5>Sponsors</h5>
    <ul class="donors">
        <li><a href="https://github.com/heartbank"><img src="https://github.com/heartbank.png?size=100"></a></li>
        <li><a href="https://github.com/siliconwat"><img src="https://github.com/siliconwat.png?size=100"></a></li>
        <li><a href="https://github.com/thonlymetaverse"><img src="https://github.com/thonlymetaverse.png?size=100"></a></li>
        <li><a href="https://github.com/nhiakou"><img src="https://github.com/nhiakou.png?size=100"></a></li>
    </ul>
`;

export default template;