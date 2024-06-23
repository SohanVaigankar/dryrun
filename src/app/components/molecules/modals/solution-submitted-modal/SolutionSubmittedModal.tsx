"use client";

// components
import { Modal } from "@/app/components/atoms";
// icons
import { FaCircleCheck } from "react-icons/fa6";
import { useSandBoxContext } from "@/contexts";
import { SANDBOX_CONTEXT_ACTIONS } from "@/contexts/sandbox-context/action.types";

interface SolutionSubmittedModalProps {
  language: string;
  openModal: boolean;
}

const SolutionSubmittedModal = (props: SolutionSubmittedModalProps) => {
  const { language, openModal } = props;
  const statistics = [
    { label: "Execution Time", value: "500ms" },
    { label: "Language", value: language },
    { label: "Time Taken", value: "34 mins" },
  ];

  //   dummy block to reset the submit state
  const { dispatch } = useSandBoxContext();
  const resetSubmit = () => {
    dispatch({ type: SANDBOX_CONTEXT_ACTIONS.RESET_SUBMIT, payload: false });
  };

  return (
    <Modal isOpen={openModal} onClose={() => resetSubmit}>
      <div className=" flex flex-col items-center justify-center p-5 ">
        <FaCircleCheck className=" mb-4 h-[2rem] w-[2rem] text-green-600 md:h-[4rem] md:w-[4rem]" />
        <h3 className="text-2xl font-bold">
          Awesome, Your solution was submitted !!
        </h3>
        <ul className="mt-5 flex flex-col justify-center gap-5 md:flex-row">
          {statistics?.map((stat, index) => (
            <li
              key={index}
              className="flex  items-center justify-center gap-2 rounded-sm bg-green-100 p-3 shadow-sm dark:text-primary-foreground"
            >
              <span className="font-semibold">{stat.label}:</span>
              <span className="">{stat.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default SolutionSubmittedModal;
