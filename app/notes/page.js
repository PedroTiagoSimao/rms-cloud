import Link from "next/link";

async function getNotes() {
    const res = await fetch('')
    const data = await res.json();
    return data.items
}

export default async function NotesPage() {
    const notes = await getNotes()

    return(
        <div>
            <h1>Notes</h1>
            {
                notes?.map((note) => {
                    return (
                        <Note key={note.id} note={note} />
                    )
                })
            }
        </div>
    )
}

function Note() {
    const {id, title, content, created} = note || {}

    return (
        <Link href={`/notes/${id}`}>
            <div>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p>{created}</p>
            </div>
        </Link>
    )
}