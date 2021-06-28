import { ReactNode } from 'react';
import './styles.scss';
import cx from 'classnames';
type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    children?: ReactNode;
    isAnswered?: boolean;
    isHightlighted?: boolean;
}
export function Question({
    content,
    author,
    isAnswered = false,
    isHightlighted = false,
    children
}: QuestionProps) {
    return (
        <div className={cx(
            'question',
            { answered: isAnswered },
            { highlighted: isHightlighted && !isAnswered},
        )}>
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                <div>
                    {children}
                </div>
            </footer>
        </div >
    )
}