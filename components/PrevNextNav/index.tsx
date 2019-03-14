import React from 'react'
import { PostTitle, getNext, getPrev } from '../../data/PostMenu'
import Link from '../Link';
import { Button } from '@semon/semon-ui';

export default function PrevNextNav({ title }: { title: PostTitle }) {
  let prev = getPrev(title)
  let next = getNext(title)

  return (
    <section className='prev-next-nav'>
      {
        prev ? <Link href={`/doc?title=${prev.file}`} as={`/doc/${prev.file}`}>
          <Button className='prev' icon='left'>{`${prev.title}${prev.subTitle ? ' ' + prev.subTitle : ''}`}</Button>
        </Link> : null
      }
      <div className='holder' />
      {
        next ? <Link href={`/doc?title=${next.file}`} as={`/doc/${next.file}`}>
          <Button className='next' iconRight='right'>{`${next.title}${next.subTitle ? ' ' + next.subTitle : ''}`}</Button>
        </Link> : null
      }
      <style jsx global>{`
        .prev-next-nav{
          display: flex;
          box-sizing: border-box;
          min-width: 200px;
          max-width: 980px;
          margin: 0 auto;
          padding: 24px 45px;
          position: relative;
          margin-top: 150px;
        }
        .holder{
          flex-grow: 1;
        }
        .prev-next-nav::before{
          content: '';
          border-top: 1px solid #e8e8e8;
          position: absolute;
          left: 45px;
          right: 45px;
          top: 0;
        }
        .prev-next-nav>.prev,.prev-next-nav>.next{
          border: none;
          box-shadow: none;
        }
        .prev-next-nav>.prev::after,.prev-next-nav>.next::after{
          display: none;
        }
        .prev-next-nav>.next{
          justify-self: flex-end;
        }
      `}
      </style>
    </section >
  )
}