interface AppointmentListProps {
  time: string;
  name?: string;
  description?: string;
  style?: string;
  bgColor: string;
}

const AppointmentList = ({
  time,
  name,
  description,
  style,
  bgColor,
}: AppointmentListProps) => {
  return (
    <ul className="font-geist mt-4 flex list-none items-center gap-3 leading-[100%] font-medium">
      <li className={`h-4 w-1.5 rounded-[3px] ${bgColor}`}></li>
      <li className="w-[40px] text-xs text-[#9495A0]">{time}</li>
      <li className="text-sm">
        {name} <span className={`text-[#9495A0] ${style}`}> {description}</span>
      </li>
    </ul>
  );
};

export default AppointmentList;
