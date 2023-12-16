import Accordion from "../components/Accordion";

const items = [
    {
        id: "hjbhbsdfjb",
        title: "Demo title 1",
        content:
            "This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item.",
    },
    {
        id: "vdfvdfvb",
        title: "Demo title 2 ",
        content:
            "This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item.",
    },
    {
        id: "vedfvdfvdf",
        title: "Demo title 3",
        content:
            "This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item. This the content of the this item.",
    },
];

const App = () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    );
};

export default App;
