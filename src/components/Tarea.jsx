import ReactMarkdown from 'react-markdown'

const Tarea = ({ language, code, title, number, description, children }) => {
    return (
        <div>
            {title && (
                <h3><span className="badge bg-secondary">{number})</span> {title}</h3>
            )}
            <ReactMarkdown>{description}</ReactMarkdown>
            {code && (
                <div>
                    <pre><code className={language}>{code}</code></pre>
                </div>
            )}
            {children}
            <hr />
        </div>
    )
}

export default Tarea
