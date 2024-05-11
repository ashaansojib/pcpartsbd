import { FadeLoader } from "react-spinners";

export const DataLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="flex flex-row space-x-4">
        <div className="flex">
          <div className="relative">
            {/* <!-- Outer Ring--> */}
            <div
              className="w-12 h-12 rounded-full absolute
                            border-4 border-dashed border-gray-400"
            ></div>
            {/* <!-- Inner Ring --> */}
            <div
              className="w-12 h-12 rounded-full animate-spin absolute
                            border-4 border-dashed border-primary border-t-transparent"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
