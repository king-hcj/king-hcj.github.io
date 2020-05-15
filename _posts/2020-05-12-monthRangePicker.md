---
layout: post
title: 月份范围选择器
categories: JavaScript
description: 月份范围选择器。
keywords: MonthRangePicker
---

&emsp;&emsp;月份范围选择器。
```jsx
import React from 'react';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

// getMonthRangeValue返回值给调用者
export default class MonthRangePicker extends React.Component {
    state = {
        mode: ['month', 'month'],
        value: [],
        isopen: false,
    };

    handlePanelChange = (value, mode) => {
        this.setState({
            value,
            mode: [mode[0] === 'date' ? 'month' : mode[0], mode[1] === 'date' ? 'month' : mode[1]],
            isopen: mode[1] !== 'date',
        }, () => {
            if(!this.state.isopen) this.props.getMonthRangeValue(this.state.value)
        });
    };

    handleChange = value => {
        this.setState({ value });
        this.props.getMonthRangeValue(this.state.value)
    };

    onOpenChange = status => {
        if (status) {
            this.setState({ isopen: true })
        } else {
            this.setState({ isopen: false })
            this.props.getMonthRangeValue(this.state.value)
        }
    };

    render() {
        const { value, mode, isopen } = this.state;
        return (
            <RangePicker
                open={isopen}
                onOpenChange={this.onOpenChange}
                placeholder={['开始月份', '结束月份']}
                format="YYYY-MM"
                value={value}
                mode={mode}
                onChange={this.handleChange}
                onPanelChange={this.handlePanelChange}
            />
        );
    }
}
```