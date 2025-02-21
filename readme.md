# React Custom Toaster

React Custom Toaster is a highly customizable toast notification component for React applications. It provides an elegant and flexible way to display notifications in your app.

## Installation

To install the package, run the following command:

```bash
npm install react-custom-toaster
```

or if you're using yarn:

```shell
yarn add react-custom-toaster
```

## Usage

### 1. Provider Setup

First, wrap your application with the `ToastProvider`. Typically, this is done in your root component or in `_app.js` if you're using Next.js:

```javascriptreact
import { ToastProvider } from 'react-custom-toaster';

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}

export default MyApp;
```

### 2. Using the Toaster

Add the `Toaster` component to your application, usually at the end of your root component:

```javascriptreact
import { Toaster } from 'react-custom-toaster';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default MyApp;
```

### 3. Using the `useToast` Hook

You can use the `useToast` hook to display toasts anywhere in your application:

```javascriptreact
import { useToast } from 'react-custom-toaster';

function MyComponent() {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "Success",
      description: "The operation completed successfully.",
      variant: "success",
    });
  };

  return <button onClick={handleClick}>Show Toast</button>;
}
```

## API

### `useToast`

The `useToast` hook provides a `toast` function that accepts the following options:

- `title`: The toast title (optional)
- `description`: The toast description (optional)
- `variant`: The toast variant ('default' | 'success' | 'warning' | 'destructive' | 'info')
- `duration`: The duration of the toast in milliseconds (default is 5000)
- `action`: An action element for the toast (optional)
- `icon`: An icon for the toast (optional)

### Components

- `ToastProvider`: Provides context for toasts
- `Toaster`: Renders the toasts
- `Toast`: Base toast component
- `ToastTitle`: Component for the toast title
- `ToastDescription`: Component for the toast description
- `ToastClose`: Component to close the toast
- `ToastAction`: Component for actions in the toast

## Customization

You can customize the appearance of the toasts using Tailwind CSS classes or by overriding the default styles.

## Example

```javascriptreact
import { useToast } from 'react-custom-toaster';
import { CheckCircle } from 'lucide-react';

function MyComponent() {
  const { toast } = useToast();

  const showSuccessToast = () => {
    toast({
      title: "Operation Successful",
      description: "Changes have been saved successfully.",
      variant: "success",
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      duration: 3000,
    });
  };

  return <button onClick={showSuccessToast}>Save Changes</button>;
}
```

## Contributing

Contributions are welcome! If you want to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

Please ensure your code follows the project's coding standards and includes relevant tests.

## License

This project is licensed under the MIT License.


