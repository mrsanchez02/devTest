"use client";
import { CardComponentProps } from '@/interfaces/card.interface';

const Card = ({ title, content, link, date, height = '28', width = '64' }: CardComponentProps) => {
  return (
    <div className={`card w-${width} bg-base-100 h-${height}` }>
      <div className="card-body">
        <h2 className="text-3xl font-bold">{title}</h2>
        {date && <span className='text-sm'>{new Date(date).toLocaleDateString()}</span>}
        <p className=''>{content.replace(/(<([^>]+)>)/gi, "")}</p>
        {link && <div className="card-actions justify-end">
          <a className="btn btn-primary" href={link} target='_blank'>Read more</a>
        </div>}
      </div>
    </div>
  )
}

export default Card