import { AppState } from "../utils/store";
import { useSelector } from "react-redux";
export const GetState = function (key: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<any>
  ): any {
    const proxy = new Proxy<typeof descriptor.value>(descriptor.value, {
      apply(applyTarget, thisArg, argArray) {
        const data = useSelector<AppState>((state) => {
          return Reflect.get(state, key);
        });
        return applyTarget(data);
      },
    });
    descriptor.value = proxy;
  };
};
