export default async function Read(props) {
    // const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`, {cache:'no-store'});
    const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + 'topics/' + `${props.params.id}`, {cache:'no-store'});
    const topic = await resp.json();
    return (
        <>
        <h2>{topic.title}</h2>
        <p>파라미터 : {props.params.id}</p>
        <p>내용 : {topic.body}</p>
        </>
    )
}