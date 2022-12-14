interface Props {
    isClicked: boolean;
}

const FilterIcon = ({ isClicked }: Props) => {
    const color = isClicked ? '#8FB5FF' : '#DEDEDE';
    return (
        <svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line
                x1="4.5"
                y1="1"
                x2="4.5"
                y2="27"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
            />
            <circle cx="4.5" cy="9.5" r="3.5" fill="white" stroke={color} stroke-width="2" />
            <line
                x1="14.5"
                y1="1"
                x2="14.5"
                y2="27"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
            />
            <circle cx="14.5" cy="18.5" r="3.5" fill="white" stroke={color} stroke-width="2" />
            <line
                x1="24.5"
                y1="1"
                x2="24.5"
                y2="27"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
            />
            <circle cx="24.5" cy="14.5" r="3.5" fill="white" stroke={color} stroke-width="2" />
        </svg>
    );
};

export default FilterIcon;
