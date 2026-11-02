import type { ReactNode } from "react";
import Alert from "react-bootstrap/Alert";

interface ErrorAlertProps {
	children: ReactNode;
}

const ErrorAlert = ({ children }: ErrorAlertProps) => {
	return (
		<Alert variant="danger">
			{children}
		</Alert>
	)
}

export default ErrorAlert;
