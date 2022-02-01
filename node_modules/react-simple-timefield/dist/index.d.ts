import * as React from 'react';
import { ChangeEvent, CSSProperties, ReactElement } from 'react';
export declare function isNumber<T>(value: T): boolean;
export declare function formatTimeItem(value?: string | number): string;
export declare function validateTimeAndCursor(showSeconds?: boolean, value?: string, defaultValue?: string, colon?: string, cursorPosition?: number): [string, number];
declare type onChangeType = (event: ChangeEvent<HTMLInputElement>, value: string) => void;
interface Props {
    value?: string;
    onChange?: onChangeType;
    showSeconds?: boolean;
    input: ReactElement | null;
    inputRef?: () => HTMLInputElement | null;
    colon?: string;
    style?: CSSProperties | {};
}
interface State {
    value: string;
    _colon: string;
    _defaultValue: string;
    _showSeconds: boolean;
    _maxLength: number;
}
export default class TimeField extends React.Component<Props, State> {
    static defaultProps: Props;
    constructor(props: Props);
    componentDidUpdate(prevProps: Props): void;
    onInputChange(event: ChangeEvent<HTMLInputElement>, callback: onChangeType): void;
    render(): ReactElement;
}
export {};
