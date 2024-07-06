type FeatureItem = {
    title: string;
    icon: any;
    description: string;
    variant: string;
  };
  
  export const FeatureItem = ({ title, icon, description, variant }: FeatureItem) => {
    return (
      <li className="flex w-full flex-1 flex-col items-start">
        <div
          className={`rounded-full  p-3 lg:p-7 `}
          style={{
            backgroundColor: variant,
            boxShadow: `0px 10px 30px ${variant}`,
          }}
        >
          {icon}
        </div>
        <h2 className="font-bold text-lg mt-5 capitalize">{title}</h2>
        <p className="regular-16 mt-5 text-gray-30 lg:mt-[30px] lg:bg-none">
          {description}
        </p>
      </li>
    );
  };