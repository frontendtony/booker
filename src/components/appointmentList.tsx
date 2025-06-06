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
    <div className="font-geist mt-4 flex items-center gap-3 leading-[100%] font-medium">
      <div className={`h-4 w-1.5 rounded-[3px] ${bgColor}`}></div>
      <span className="w-[40px] text-xs text-[#9495A0]">{time}</span>
      <p className="text-sm">
        {name} <span className={`text-[#9495A0] ${style}`}> {description}</span>
      </p>
    </div>
  );
};

export default AppointmentList;
