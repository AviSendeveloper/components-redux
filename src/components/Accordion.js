import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handelClick = (clickedIndex) => {
        setExpandedIndex((currentExpandedIndex) => {
            if (currentExpandedIndex === clickedIndex) {
                return -1;
            }
            return clickedIndex;
        });
    };

    const renderItems = items.map((item, index) => {
        const isExpanded = expandedIndex === index;

        const icon = (
            <span className="text-2xl">
                {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
            </span>
        );

        return (
            <div key={item.id}>
                <div
                    onClick={() => handelClick(index)}
                    className="flex justify-between p-3 bg-gray-50 border-b item-center cursor-pointer"
                >
                    {item.title} {icon}
                </div>
                {isExpanded && (
                    <div className="border-b p-5">{item.content}</div>
                )}
            </div>
        );
    });

    return <div className="border-x border-t rounded">{renderItems}</div>;
};

export default Accordion;
