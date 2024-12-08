import { useContext, useState, createContext } from "react";
import { toast } from 'react-toastify';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const toastUp = (val) => {
        toast.info(val, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });
    }

    const [i, setI] = useState(1);
    const notify = () => {
        switch (i) {
            case 1:
                toastUp("Oops! Looks like this button is just here to look pretty. 🚧");
                setI(i + 1);
                break;

            case 2:
                toastUp("Hey there, just a placeholder—nothing happening here! 🎭");
                setI(i + 1);
                break;

            case 3:
                toastUp("Hold up! This feature is taking a little nap. Maybe try again later? ✋");
                setI(i + 1);
                break;

            case 4:
                toastUp("Looks like this button is off-duty today!🛑",);
                setI(i + 1);
                break;

            case 5:
                toastUp("Whoa, nothing to see here—just keep exploring the other buttons! 🌀");
                setI(i + 1);
                break;

            case 6:
                toastUp("Oh, you found a button! Too bad it’s not doing anything… yet! 🎈");
                setI(i + 1);
                break;

            case 7:
                toastUp("Missing a piece? This button is more for style than action. 🧩");
                setI(i + 1);
                break;

            case 8:
                toastUp("Clicking this won’t unlock any secrets, but nice try! ✨");
                setI(i + 1);
                break;

            case 9:
                toastUp("You pressed it! And… that’s it. But it does look cool, doesn’t it? 🕹️");
                setI(i + 1);
                break;

            default:
                toastUp("Alright, you win! You've clicked enough times to earn a gold star... but still, nothing happens! 🎉");
        }
    };

    return (
        <StateContext.Provider value={notify}>
            {children}
        </StateContext.Provider>
    );
};

export const useNotify = () => useContext(StateContext);