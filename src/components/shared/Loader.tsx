import { FadeLoader } from "react-spinners";

export const DataLoader = () => {
  return (
    <>
      <div className="w-[50px] mx-auto text-primary flex justify-center items-center p-4">
        <FadeLoader />
      </div>
      <p className="text-accent text-center">Please Wait...</p>
    </>
  );
};
