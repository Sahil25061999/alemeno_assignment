import { Status } from "../../schemes/shared";

interface Params {
  status: Status;
}
export const EmptyList = ({ status = "idle" }: Params) => {
  return (
    <div className="h-[60vh] flex justify-center items-center">
      <h1 className="text-center">
        {status === "pending" ? "Loading..." : "No course or intructor found"}
      </h1>
    </div>
  );
};
