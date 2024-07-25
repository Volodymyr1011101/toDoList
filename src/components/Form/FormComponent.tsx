'use client';
import { Form, Input, message } from 'antd';
import type { NextComponentType, NextPageContext } from 'next';
import { Dispatch, SetStateAction } from 'react';
import { ITodo } from '../ToDo/ToDo';
interface Props {
    setToDos: Dispatch<SetStateAction<ITodo[]>>;
}
const FormComponent: NextComponentType<NextPageContext, {}, Props> = ({ setToDos }: Props) => {
    const [form] = Form.useForm();
    const onFinishFailed = () => {
        message.error('Add ToDo failed');
    };
    const onFinish = (data: { todo: string }) => {
        setToDos(prev => [...prev, { id: `${Date.now()}`, todo: data.todo, isComplete: false }]);
        message.success('ToDo item added');
        form.resetFields();
    };
    return (
        <div>
            <Form form={form} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                <Form.Item name="todo" rules={[{ required: true }, { type: 'string', min: 2 }]}>
                    <Input placeholder="Create a new todo..." />
                </Form.Item>
            </Form>
        </div>
    );
};

export default FormComponent;
