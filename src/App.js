import { GoBell, GoBook } from "react-icons/go";
import Button from "./ui/Button";

const App = () => {
    const handelClick = () => {
        console.log("clicked");
    };

    return (
        <div>
            <div>
                <Button
                    success
                    rounded
                    outline
                    className="mb-5"
                    onClick={handelClick}
                >
                    <GoBell className="mr-1" />
                    Click me!
                </Button>
            </div>
            <div>
                <Button danger rounded outline onMouseEnter={handelClick}>
                    <GoBook className="mr-1" />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button primary outline>
                    See Deal!
                </Button>
            </div>
            <div>
                <Button warning rounded>
                    Hide Ads!
                </Button>
            </div>
            <div>
                <Button secondary>Something!</Button>
            </div>
        </div>
    );
};

export default App;
