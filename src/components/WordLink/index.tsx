import Link from 'next/link'
import { DictionaryEntry } from 'lib/services/dictionary';
import styles from './WordLink.module.scss'

interface WordLinkProps{
  data: DictionaryEntry,
  useLowerCase: boolean,
}

export default function WordLink({ data, useLowerCase = true }: WordLinkProps) {
  const { slug, word } = data

  return (
    <Link key={`link${slug}`} href={`/word/${slug}`} className={styles.link} prefetch={false}>
       {useLowerCase ? word.toLowerCase() : word}
     </Link>
  );
}
