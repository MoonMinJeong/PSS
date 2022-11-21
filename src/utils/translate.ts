const minuteToSecond = 60;
const hourToSecond = minuteToSecond * 60;
const dayToSecond = hourToSecond * 24;
const monthToSecond = dayToSecond * 30;

export const howLong = (createdAt: Date) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const diff = (now.getTime() - createdDate.getTime()) / 1000;
    if (diff < minuteToSecond) return `${Math.floor(diff)}초`;
    else if (diff < hourToSecond) return `${Math.floor(diff / minuteToSecond)}분 전`;
    else if (diff < dayToSecond) return `${Math.floor(diff / hourToSecond)}시 전`;
    else if (diff < monthToSecond) return `${Math.floor(diff / dayToSecond)}일 전`;
    else
        return `${createdDate.getFullYear()}.${
            createdDate.getMonth() + 1
        }.${createdDate.getDate()}`;
};
