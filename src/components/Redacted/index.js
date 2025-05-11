export default function Redacted({ length = 4, shade = false }) {
    const symbol = shade ? '▒' : '█';
    return <span>{symbol.repeat(length)}</span>;
}