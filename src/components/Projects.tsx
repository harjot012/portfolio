'use client';
import {useState} from 'react';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {projects,categories} from '@/data/projects';
import {ProjectVisual} from './ProjectVisual';
export function Projects({all=false}:{all?:boolean}){const [category,setCategory]=useState('All');const shown=projects.filter(p=>(all||p.featured)&&(category==='All'||p.category===category));return <><div className="filters" role="group" aria-label="Filter projects">{categories.map(c=><button key={c} className={category===c?'filter active':'filter'} onClick={()=>setCategory(c)}>{c}</button>)}</div><div className="project-grid">{shown.map((p,i)=><Link className="project-card" href={`/projects/${p.slug}`} key={p.slug}><ProjectVisual project={p}/><div className="project-content"><div className="project-meta"><span>{p.eyebrow}</span><span>{p.year}</span></div><div className="project-heading"><h3>{p.title}</h3><ArrowUpRight size={20}/></div><p>{p.description}</p><div className="tags">{p.stack.slice(0,4).map(t=><span key={t}>{t}</span>)}</div></div></Link>)}</div>{!all&&<div className="section-bottom"><Link className="button button-outline" href="/projects">Explore all projects <ArrowUpRight size={17}/></Link></div>}</>}
