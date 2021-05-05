import React, { FC, HTMLProps } from 'react';
import { classnames } from '@bem-react/classnames';

import { cn } from 'utils/cn';

import Item from './__item';

import styles from './menu.module.css';
import Logo from 'components/logo';

export const cnMenu = cn('menu', styles);

export type TMenuProps = HTMLProps<HTMLDivElement>;

type TMenuStaticProps = {
    Item: typeof Item;
};

const Menu: TMenuStaticProps & FC<TMenuProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <nav {...props} className={classnames(cnMenu(), className)}>
            <div className={cnMenu('content')}>
                <Logo className={cnMenu('logo')} />
                <li className={cnMenu('list')}>{children}</li>
            </div>
        </nav>
    );
};

Menu.Item = Item;

export default Menu;
