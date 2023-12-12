# Components

different type of components

## Button

### App.js

---

add ButtonPage in App.js

```js
import ButtonPage from "./pages/ButtonPage";

const App = () => {
    return (
        <div>
            <ButtonPage />
        </div>
    );
};

export default App;
```

#### ButtonPage

---

```js
import { GoBell, GoBook } from "react-icons/go";
import Button from "../components/Button";

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
```

#### Button

---

Button component is using as re-useable component

> Here we use few package \
> like "classnames" and "react-icons"

```js
import className from "classnames";
import { twMerge } from "tailwind-merge";

const Button = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) => {
    const classes = className(
        rest.className,
        "flex items-center px-3 py-1.5 mx-4 my-2 border",
        {
            "border-blue-500 bg-blue-500 text-white": primary,
            "border-gray-900 bg-gray-500 text-white": secondary,
            "border-green-500 bg-green-500 text-white": success,
            "border-yellow-500 bg-yellow-500 text-white": warning,
            "border-red-500 bg-red-500 text-white": danger,
            "rounded-full": rounded,
            "bg-white": outline,
            "text-blue-500": outline && primary,
            "text-gray-900": outline && secondary,
            "text-green-500": outline && success,
            "text-yellow-400": outline && warning,
            "text-red-500": outline && danger,
        }
    );

    return (
        <div>
            <button {...rest} className={classes}>
                {children}
            </button>
        </div>
    );
};

Button.propTypes = {
    checkVariationType: ({ primary, secondary, success, warning, danger }) => {
        const count =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger);

        if (count > 1)
            throw new Error(
                "Only anyone should be there as variation type in between primary, secondary, success, warning and danger"
            );
    },
};

export default Button;
```

**Tricks:** check props are passed or not

> !undefined == true
> Number(true) == 1\
> Number(false) == 0\
> Number(!!undefined) == 0\

**Tricks:** passing all event and className from parent to child component

```js
const Button = ({
    // ...
    ...rest
}) => {
    const classes = className(
        rest.className,
        "flex items-center px-3 py-1.5 mx-4 my-2 border"
    );

    return (
        <div>
            <button {...rest} className={classes}>
                {children}
            </button>
        </div>
    );
};

export default Button;
```
