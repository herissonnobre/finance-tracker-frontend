import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  supportingText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, supportingText, className, ...props }, ref) => {
    return (
      <div className="mb-4">
        <div className="relative m-0">
          {label && (
            <label
              className={`absolute -top-2 left-3 px-1 text-body-small bg-light-surface dark:bg-dark-surface  ${error ? "text-light-error dark:text-dark-error" : "text-light-on-surface-variant dark:text-dark-on-surface-variant"}`}
            >
              {label}
            </label>
          )}
          <input
            ref={ref}
            {...props}
            className={`w-full py-4 pl-4 bg-transparent text-light-on-surface dark:text-dark-on-surface placeholder-light-on-surface-variant dark:placeholder-dark-on-surface-variant border rounded-sm border-light-outline dark:border-dark-outline hover:border-light-on-surface dark:hover:border-dark-on-surface focus:outline-2 focus:border-light-primary  focus:outline-light-primary dark:focus:border-dark-primary dark:focus:outline-dark-primary transition-colors duration-200 ${error && "border-light-error dark:border-dark-error outline-2 outline-light-error dark:outline-dark-error dark:focus:outline-dark-primary"} ${className}`}
          />
        </div>
        <div className="h-5 flex items-end justify-center px-4 pt-1">
          {(error || supportingText) && (
            <p
              className={`w-full text-body-small text-left  ${
                error
                  ? "text-light-error dark:text-dark-error"
                  : supportingText
                    ? "text-light-on-surface-variant dark:text-dark-on-surface-variant "
                    : "text-muted"
              }`}
            >
              {error || supportingText}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
