import mitt from "mitt";

type ApplicationEvents = {
  modalOpen: string;
};

const emitter = mitt<ApplicationEvents>();

export const useEvent = emitter.emit;
export const useListen = emitter.on;
