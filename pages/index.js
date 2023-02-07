/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../system/layout'
import { Button } from '@hummingbot/hbui/elements/buttons'
import { PageRoot, Section, Container } from '@hummingbot/hbui/elements/layout'
import Navigation from '../ui/components/Navigation'
import Hero from '../ui/components/home/Hero'
import Content from '../ui/components/home/Content'

const IndexPage = () => (
  <Layout>
    <PageRoot>
      <Navigation />
      <Section>
        <Hero />
        <Content />
      </Section>
    </PageRoot>
  </Layout>
)

export default IndexPage

